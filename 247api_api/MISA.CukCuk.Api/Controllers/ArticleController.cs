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
    [Route("api/v1/article")]
    [ApiController]
    public class ArticleController : BaseController<article>
    {
        public ArticleController(IBaseService<article> baseService) : base(baseService)
        {

        }
    }
}
