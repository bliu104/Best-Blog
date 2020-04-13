class AuthenticationController < ApplicationController
  before_action :authorize_request, except: :login

  # POST /auth/login
  def login
    @user = User.find_by_name(login_params[:name])
    p @user
    if @user.authenticate(login_params[:password]) #authenticate method provided by Bcrypt and 'has_secure_password'
      token = encode(user_id: @user.id, name: @user.name)
      render json: { user: @user, token: token }, status: :ok
    else
      render json: { errors: "unauthorized" }, status: :unauthorized
    end
  end

  # GET /auth/verify
  def verify
    render json: @current_user, status: :ok
  end

  private

  def login_params
    params.require(:auth).permit(:name, :password)
  end
end
