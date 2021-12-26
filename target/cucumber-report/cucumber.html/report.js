$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Laptop.feature");
formatter.feature({
  "line": 1,
  "name": "Laptop Search",
  "description": "\r\nUser should search laptop and add to cart successfully",
  "id": "laptop-search",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Verify user should add laptop to cart successfully",
  "description": "",
  "id": "laptop-search;verify-user-should-add-laptop-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I enter \"\u003cPRODUCT\u003e\" into search box",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on \u0027SEARCH\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Product name \"\u003cPRODUCT NAME\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I change quantity \"\u003cQUANTITY\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on \u0027Add To Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Product added to cart successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "laptop-search;verify-user-should-add-laptop-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "PRODUCT",
        "PRODUCT NAME",
        "QUANTITY"
      ],
      "line": 16,
      "id": "laptop-search;verify-user-should-add-laptop-to-cart-successfully;;1"
    },
    {
      "comments": [
        {
          "line": 17,
          "value": "#      | Laptop  | Alienware M15 R6 Gaming Laptop, 15.6 inch QHD 240Hz Display, Intel Core i7-11800H, 32GB DDR4 RAM, 1TB SSD, NVIDIA GeForce RTX 3080 8GB GDDR6, Windows 11 Home, Dark Side of The Moon (Latest Model) | 3        |"
        }
      ],
      "cells": [
        "Laptop",
        "ASUS L410 MA-DB04 Ultra Thin Laptop, 14” FHD Display, Intel Celeron N4020 Processor, 4GB RAM, 128GB Storage, NumberPad, Windows 10 Home in S Mode, Star Black",
        "3"
      ],
      "line": 18,
      "id": "laptop-search;verify-user-should-add-laptop-to-cart-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3787476500,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "comments": [
    {
      "line": 17,
      "value": "#      | Laptop  | Alienware M15 R6 Gaming Laptop, 15.6 inch QHD 240Hz Display, Intel Core i7-11800H, 32GB DDR4 RAM, 1TB SSD, NVIDIA GeForce RTX 3080 8GB GDDR6, Windows 11 Home, Dark Side of The Moon (Latest Model) | 3        |"
    }
  ],
  "line": 18,
  "name": "Verify user should add laptop to cart successfully",
  "description": "",
  "id": "laptop-search;verify-user-should-add-laptop-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I enter \"Laptop\" into search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on \u0027SEARCH\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Product name \"ASUS L410 MA-DB04 Ultra Thin Laptop, 14” FHD Display, Intel Celeron N4020 Processor, 4GB RAM, 128GB Storage, NumberPad, Windows 10 Home in S Mode, Star Black\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I change quantity \"3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on \u0027Add To Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Product added to cart successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Laptop",
      "offset": 9
    }
  ],
  "location": "LaptopTest.iEnterIntoSearchBox(String)"
});
formatter.result({
  "duration": 148951300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopTest.iClickOnSEARCHButton()"
});
formatter.result({
  "duration": 1698828400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ASUS L410 MA-DB04 Ultra Thin Laptop, 14” FHD Display, Intel Celeron N4020 Processor, 4GB RAM, 128GB Storage, NumberPad, Windows 10 Home in S Mode, Star Black",
      "offset": 25
    }
  ],
  "location": "LaptopTest.iClickOnProductName(String)"
});
formatter.result({
  "duration": 7201393400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "LaptopTest.iChangeQuantity(String)"
});
formatter.result({
  "duration": 94986600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 170376500,
  "status": "passed"
});
formatter.match({
  "location": "LaptopTest.productAddedToCartSuccessfully()"
});
formatter.result({
  "duration": 2039328600,
  "status": "passed"
});
formatter.after({
  "duration": 74900,
  "status": "passed"
});
});