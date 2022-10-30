using System.Net;
using System.Text.Json;
using API.Errors;

namespace API.Middleware
{
    public class ExceptionMiddleware
    {
        private readonly ILogger<ExceptionMiddleware> _logger;
        public readonly RequestDelegate _next;
        public readonly IHostEnvironment _env;
        public ExceptionMiddleware(RequestDelegate next,ILogger<ExceptionMiddleware> logger,IHostEnvironment env)
        {
            _env = env;
            _next = next;
            _logger = logger;

        }
        public async Task InvokeAsync(HttpContext context)
        {
            try{
                await _next(context);
            }catch(Exception ex){
                _logger.LogError(ex,ex.Message);
                context.Response.ContentType="application/json";
                context.Response.StatusCode=(int) HttpStatusCode.InternalServerError;
                var respose  = _env.IsDevelopment()? 
                new ApiException(context.Response.StatusCode, ex.Message, ex.StackTrace?.ToString())
                :
                new ApiException(context.Response.StatusCode,"internal Server Error");
                var options = new JsonSerializerOptions{PropertyNamingPolicy = JsonNamingPolicy.CamelCase};
                var json = JsonSerializer.Serialize(respose,options);
                await context.Response.WriteAsync(json);
            }

        }
    }
}