class StartupsController < ApplicationController
  before_filter :authenticate_user!

  def new
    @startup = Startup.new
  end

  def create
    @startup = Startup.create(startup_params)
    respond_to do |format|
      format.html { redirect_to cms_path }
    end
  end

  def show
    respond_to do |format|
      format.html { redirect_to cms_path }
    end
  end

  def index
    @startup = Startup.all
    respond_to do |format|
      format.html { redirect_to cms_path }
    end
  end

  def edit
    @startup = Startup.find(params[:id])
  end

  def update   
    @startup = Startup.find(params[:id])
    if @startup.update_attributes(startup_params)
      respond_to do |format|
       format.html { redirect_to cms_path }
      end
    else
      render :action => 'edit'
    end
  end

  def destroy
    @startup = Startup.find(params[:id])
    @startup.destroy
    respond_to do |format|
      format.html { redirect_to cms_path }
    end
  end
  
  private
  
  def startup_params
    params.require(:hero).permit(:title, :content, :url, :image)
  end
  
end