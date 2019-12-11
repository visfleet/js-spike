class GraphqlController < ApplicationController
  protect_from_forgery with: :null_session
  def execute
    context = {
      controller: self
    }

    result =
      if params[:_json]
        queries = params[:_json].map do |param|
          {
            query: param[:query],
            operation_name: param[:operationName],
            variables: ensure_hash(param[:variables]),
            context: context
          }
        end
        VworkRailsSchema.multiplex(queries)
      else
        FileManagementworkRailsSchemaystemSchema.execute(
          params[:query],
          operation_name: params[:operationName],
          variables: ensure_hash(params[:variables]),
          context: context
        )
      end

    render json: result
  end

  private

  # Handle form data, JSON body, or a blank value
  def ensure_hash(ambiguous_param)
    case ambiguous_param
    when String
      if ambiguous_param.present?
        ensure_hash(JSON.parse(ambiguous_param))
      else
        {}
      end
    when Hash, ActionController::Parameters
      ambiguous_param
    when nil
      {}
    else
      raise ArgumentError, "Unexpected parameter: #{ambiguous_param}"
    end
  end

  def handle_error_in_development(error)
    logger.error error.message
    logger.error error.backtrace.join("\n")

    render json: { error: { message: error.message, backtrace: error.backtrace }, data: {} }, status: 500
  end
end
