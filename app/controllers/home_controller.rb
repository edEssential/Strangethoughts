class HomeController < ApplicationController
  before_filter :authenticate_user!, except: [:prviate]
  
  def index
    bring_in_models
  end
  
  def testing
    
  end
  
  def private
    
  end
end