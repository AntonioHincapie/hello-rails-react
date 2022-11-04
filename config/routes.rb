Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'greetings/index'
    end
  end
  root "root#index"
  get '*greeting', to: "root#index", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
