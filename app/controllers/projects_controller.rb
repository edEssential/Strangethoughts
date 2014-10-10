class ProjectsController < ApplicationController
  before_filter :authenticate_user!, except: [:project_show_via_ajax_call]

    def new
      @project = Project.new
    end

    def create
      @project = Project.create(params[:project])
      respond_to do |format|
        if @project.save
          format.html { redirect_to cms_path, :notice => "Project was successfully created" }
        else
          format.html { redirect_to new_project_path, :notice => "Cannot create product without a title!" }
        end
      end
    end

    def show
      respond_to do |format|
        format.html { redirect_to cms_path }
      end
    end
    
    def project_show_via_ajax_call
      project = Project.find(params[:id])
      next_project = project.prev
      next_project_id = next_project.map {|np| np.id}.join("")
      prev_project = project.next
      prev_project_id = prev_project.map {|pp| pp.id}.join("")
      
      vs = project.video_embed.to_s
      
      if vs == ""
        image = project.image.url(:medium)
        project_show = { :id => project.id, :title => project.title, :challenge => project.challenge, :solution => project.solution, :result => project.result, :next_project => next_project_id, :prev_project => prev_project_id, :image => image }
        render :json => project_show
      else
        video = project.video_embed
        project_show = { :id => project.id, :title => project.title, :challenge => project.challenge, :solution => project.solution, :result => project.result, :next_project => next_project_id, :prev_project => prev_project_id, :video => video }
        render :json => project_show
      end
    end

    def index
      @project = Project.all
      respond_to do |format|
        format.html { redirect_to cms_path }
      end
    end

    def edit
      @project = Project.find(params[:id])
    end

    def update   
      @project = Project.find(params[:id])
      if @project.update_attributes(params[:project])
        respond_to do |format|
         format.html { redirect_to cms_path }
        end
      else
        render :action => 'edit'
      end
    end

    def destroy
      @project = Project.find(params[:id])
      @project.destroy
      respond_to do |format|
        format.html { redirect_to cms_path }
      end
    end
  
end