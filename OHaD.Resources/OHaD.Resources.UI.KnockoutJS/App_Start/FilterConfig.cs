﻿using System.Web;
using System.Web.Mvc;

namespace OHaD.Resources.UI.KnockoutJS
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}