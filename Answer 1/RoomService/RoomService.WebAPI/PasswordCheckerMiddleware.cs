using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace RoomService.WebAPI
{
    public class PasswordCheckerMiddleware
    {
        private readonly RequestDelegate _next;

        public PasswordCheckerMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            // Check if the request contains the header "passwordKey" with the value "passwordKey123456789"
            string passwordKey = context.Request.Headers["passwordKey"];

            if (IsValidPasswordKey(passwordKey))
            {
                // Allow the request to proceed to the next middleware
                await _next(context);
            }
            else
            {
                // Return HTTP response code 403 Forbidden
                context.Response.StatusCode = (int)HttpStatusCode.Forbidden;
            }
        }

        private bool IsValidPasswordKey(string passwordKey)
        {
            const string expectedPasswordKey = "passwordKey123456789";

            // Compare the password key with the expected value
            return !string.IsNullOrEmpty(passwordKey) && passwordKey == expectedPasswordKey;
        }

    }
}
