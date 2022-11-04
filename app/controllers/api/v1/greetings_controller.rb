class Api::V1::GreetingsController < ApplicationController
  def index
    greeting = Greeting.all.sample.name
    render json: { greeting: }, status: :ok
  end
end
