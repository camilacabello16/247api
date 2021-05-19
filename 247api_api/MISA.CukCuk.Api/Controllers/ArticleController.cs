using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using API.Common.Models;
using API.Service.interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DataLayer.interfaces;
using Newtonsoft.Json.Linq;

namespace API.Controller.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class ArticleController : BaseController<article>
    {
        IBaseService<article> _baseService;
        IArticleRepository _articleRepository;
        IRequestRepository _requestRepository;
        public ArticleController(IBaseService<article> baseService, IArticleRepository articleRepository, IRequestRepository requestRepository) : base(baseService)
        {
            _baseService = baseService;
            _articleRepository = articleRepository;
            _requestRepository = requestRepository;
        }

        [HttpPost("insert-article")]
        public IActionResult PostArticle([FromBody] ArticleModel articleCreated)
        {
            var articleContent = articleCreated.articleApi;
            var articleRequest = articleCreated.requestApi;
            articleContent.ArticleID = Guid.NewGuid();
            var requestLength = articleCreated.requestApi.Count;
            for (int i = 0;i< requestLength; i++)
            {
                articleRequest[i].ArticleID = articleContent.ArticleID;
            }
            for(int i = 0; i < requestLength; i++){
                //articleRequest[i].RequestID = Guid.NewGuid();
                _requestRepository.InsertData(articleRequest[i]);
            }
            _articleRepository.InsertData(articleContent);
            return StatusCode(201, "Created success");
        }

        [HttpGet("{articleId}")]
        public IActionResult GetArticleById([FromRoute] Guid articleId)
        {
            var res = _articleRepository.GetArticleById(articleId);
            var data = res as List<article>;
            if (data.Count == 0)
            {
                return StatusCode(204, res);
            }
            else
            {
                return StatusCode(200, res);
            }
        }
    }
}
