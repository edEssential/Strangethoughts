class ContactsController < ApplicationController
  before_filter :authenticate_user!

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.create(contact_params)
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
    if @contact.update_attributes(contact_params)
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
  
  private
  
  def contact_params
    params.require(:contact).permit(:about1, :about2, :thanks)
  end

end