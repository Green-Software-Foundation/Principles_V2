---
version: 1.0
submitted_by: markus-ntt-seidl
published_date: TBD
category: web
tags: 
 - size:medium
 - role:web-developer
 - web
---

# Keep request counts low

## Description

Accessing a web page usually retrieves a HTML file from the web server. The HTML can then reference additional resources that the browser has to download. 
Keeping request counts low means reducing the amount of files needed to display a page in the browser.

## Solution

Reduce the amount of files needed and also the amount of requests made by the loaded JavaScript in order to display the final page. 

## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Keeping request counts low will impact SCI as follows:

- `E`: Reducing the amount of requests reduces the energy needed to display the page
- `M`: Reducing the amount of requests can also reduce the amount of files and therefore the storage requirements of the web page on the server


## Assumptions


## Considerations

- Consider setting up request count budgets that are measured when the application is tested via test automation


## References

- [Detailed description](https://web.dev/resource-summary/)
