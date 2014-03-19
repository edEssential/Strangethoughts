class AbouttbsController < ApplicationController
  #before_filter :authenticate_user!

    def new
      @abouttb = Abouttb.new
    end

    def create
      @abouttb = Abouttb.create(params[:abouttb])
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
      @abouttb = Abouttb.all
      respond_to do |format|
        format.html { redirect_to cms_path }
      end
    end

    def edit
      @abouttb = Abouttb.find(params[:id])
    end

    def update   
      @abouttb = Abouttb.find(params[:id])
      if @abouttb.update_attributes(params[:abouttb])
        respond_to do |format|
         format.html { redirect_to cms_path }
        end
      else
        render :action => 'edit'
      end
    end

    def destroy
      @abouttb = Abouttb.find(params[:id])
      @abouttb.destroy
      respond_to do |format|
        format.html { redirect_to cms_path }
      end
    end
  
end