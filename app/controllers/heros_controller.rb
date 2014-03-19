class HerosController < ApplicationController
  #before_filter :authenticate_user!

    def new
      @hero = Hero.new
    end

    def create
      @hero = Hero.create(params[:hero])
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
      @hero = Hero.all
      respond_to do |format|
        format.html { redirect_to cms_path }
      end
    end

    def edit
      @hero = Hero.find(params[:id])
    end

    def update   
      @hero = Hero.find(params[:id])
      if @hero.update_attributes(params[:hero])
        respond_to do |format|
         format.html { redirect_to cms_path }
        end
      else
        render :action => 'edit'
      end
    end

    def destroy
      @hero = Hero.find(params[:id])
      @hero.destroy
      respond_to do |format|
        format.html { redirect_to cms_path }
      end
    end
    
end