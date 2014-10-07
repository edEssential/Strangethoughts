class ApplicationController < ActionController::Base
  protect_from_forgery
  
  def bring_in_models
    @heros = Hero.order("id ASC")
    @abouttbfirst = Abouttb.find(1)
    @abouttbrest = Abouttb.where('id >?', 1)
    @abouttbsall = Abouttb.order("id ASC")
    @aboutbbs = Aboutbb.order("id ASC")
    @projects = Project.order("id DESC")
    @startupheader = Startupheader.first
    @startupheaders = Startupheader.order("id ASC")
    @startups = Startup.order("id ASC")
    @contacts = Contact.all
    @contact = Contact.first
    @clients = Client.order("id ASC")
  end
  
end