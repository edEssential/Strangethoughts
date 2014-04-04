class ContactsController < ApplicationController
  before_filter :authenticate_user!

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.create(params[:contact])
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
    @contacts = Contact.all
    respond_to do |format|
      format.html { redirect_to cms_path }
    end
  end

  def edit
    @contact = Contact.find(params[:id])
  end

  def update   
    @contact = Contact.find(params[:id])
    if @contact.update_attributes(params[:contact])
      respond_to do |format|
       format.html { redirect_to cms_path }
      end
    else
      render :action => 'edit'
    end
  end

  def destroy
    @contact = Contact.find(params[:id])
    @contact.destroy
    respond_to do |format|
      format.html { redirect_to cms_path }
    end
  end

end