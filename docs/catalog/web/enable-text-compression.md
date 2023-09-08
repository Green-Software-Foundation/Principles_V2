---
version: 1.0
submitted_by: markus-ntt-seidl
published_date: TBD
category: web
tags: 
 - web
 - size:small
 - role:web-developer
---

# Enable text compression

## Description

Web browsers often communicate with web servers in a human readable format. These can be HTML, JavaScript and/or CSS - files and also REST requests which can return a response in JSON. This communication is human readable and therefore highly redundant, therefore it can be highly compressed saving a lot of bandwidth.

Web browsers and servers can communicate the compression format dynamically via the "Accept-Encoding"/"Content-Encoding" HTTP Headers. This allows the communication to dynamically switch to compression formats both side support.


## Solution

Enable all supported compression formats on the server, this allows clients to use the best available format.


## SCI Impact

`SCI = (E * I) + M per R`  
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Concerning the SCI equation, the compression will impact the equation as follows:

- `E`: Reducing the amount of emissions by reducing electricity needed while transferring and processing text files.
- `M`: Reducing the amount of size of the files can also reduce the amount of storage requirements of the web page on the server

## Assumptions

- The ability to use web servers that allow compression formats

## Considerations



## References
- [HTTP compression](https://en.wikipedia.org/wiki/HTTP_compression)
- [Information about Brotli, a common web compression algorithm](https://en.wikipedia.org/wiki/Brotli)
- [Compression Format WebBrowser Implementation Status](https://caniuse.com/?search=content-encoding)

