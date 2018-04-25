class HelloController < ApplicationController
  before_action :authenticate_user!

  def index
    @tweets = [
      { id: 1, name: "Joe",  body: "My first tweet #w00t", color: 'red'},
      { id: 2, name: "Tom",  body: "THis is great", color: 'blue'},
      { id: 3, name: "Jane", body: "not sure what to say #oknowwhat", color: 'orange'}
    ]
  end
end
