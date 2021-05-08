using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MISA.Common.Models;
using MISA.Service.interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MISA.CukCuk.Api.Controllers
{
    [Route("api/v1/request")]
    [ApiController]
    public class RequestController : BaseController<request>
    {
        public RequestController(IBaseService<request> baseService) : base(baseService)
        {

        }
    }
}
