class StartupheadersController < ApplicationController
  before_filter :authenticate_user!

  def new
    @startupheader = Startupheader.new
  end

  def create
    @startupheader = Startupheader.create(startupheader_params)
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
    @startupheader = Startupheader.all
    respond_to do |format|
      format.html { redirect_to cms_path }
    end
  end

  def edit
    @startupheader = Startupheader.find(params[:id])
  end

  def update   
    @startupheader = Startupheader.find(params[:id])
    if @startupheader.update_attributes(startupheader_params)
      respond_to do |format|
       format.html { redirect_to cms_path }
      end
    else
      render :action => 'edit'
    end
  end

  def destroy
    @startupheader = Startupheader.find(params[:id])
    @startupheader.destroy
    respond_to do |format|
      format.html { redirect_to cms_path }
    end
  end
  
  def startupheader_params
    params.require(:startupheader).permit(:title, :strapline)
  end

end