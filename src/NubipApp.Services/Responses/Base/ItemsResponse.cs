using System.Collections.Generic;

namespace NubipApp.Services.Responses.Base
{
    public class ItemsResponse<T>: BaseResponse
    {
        public IList<T> Models { get; set; }
    }
}