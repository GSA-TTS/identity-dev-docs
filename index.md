---
layout: 'side-nav'
---

### API basics

HMDA is a GET API that lives at ```https://api.consumerfinance.gov/data/hmda```.

- You can query an entire **dataset**.
- You can query dataset **slices**, which are pre-loaded views we think are interesting.
- You can query **concepts**, which describe types of information found in the dataset.

{:.caps.f-sans-serif}
##### Datasets

The endpoint for querying all data begins with ```/data/```. 

{:.mb2.table-light.border}
| Endpoint | What it does |
| ------------- | -------------|
| ```/data/{dataset-name}``` | Gives all information about a dataset 
| [```/data/hmda```](https://api.consumerfinance.gov/data/hmda) | Gives mortgage data from 2007-2012.

[Try it out <i class="icon ion-arrow-right-c"></i>](#!)

{:.caps.f-sans-serif}
##### Concepts

Concepts are analogous to variables, or column headers in a spreadsheet. Concepts have properties, which describe all the possible values. You can also specify concepts in any of the supported file formats like so: ```/data/{dataset-name}/{contept-name.extension}```. 

[Try it out <i class="icon ion-arrow-right-c"></i>](#!)

{:.caps.f-sans-serif}
##### Slices

Think of slices as tables in a relational database. Every dataset has many slices representing different views of it, which you can use to <a href="queries.html">construct advanced queries</a>. The endpoint for
every slice is ```/data/{dataset-name}/{slice-name}```. 

You can even request a slice in HTML, XML, JSON, JSONP, or CSV. Just append the filename extension to the endpoint like so:
```/data/{dataset-name}/{slice-name.extension}```. 

[Try it out <i class="icon ion-arrow-right-c"></i>](#!)

{:.caps.f-sans-serif}
##### Putting it all together

Every year, the Federal Reserve finds interesting trends in HMDA data and publishes them in a report. Let's say you want to replicate some of their [2012 highlights](http://www.consumerfinance.gov/hmda/learn-more#highlights) in JSON. 

To compare refinances and home purchases in 2012, you would send the following query to the API:

<pre>https://api.consumerfinance.gov/data/hmda/slice/hmda_lar.json?#!/property_type=1,2&amp;action_taken=1&amp;select=as_of_year,loan_purpose_name,count&amp;section=summary</pre>

```sh
https://api.consumerfinance.gov/data/hmda/slice/hmda_lar.json?#!/property_type=1,2&amp;action_taken=1&amp;select=as_of_year,loan_purpose_name,count&amp;section=summary
```

[Try it out <i class="icon ion-arrow-right-c"></i>](#!)

To see changes in the FHA loan market for 2012, you would send the following query to the API:

<pre>https://api.consumerfinance.gov/data/hmda/slice/hmda_lar.json?#!/lien_status=1&amp;loan_purpose=1&amp;action_taken=1&amp;select=as_of_year,loan_type_name,count&amp;section=summary</pre>

[Try it out <i class="icon ion-arrow-right-c"></i>](#!)
