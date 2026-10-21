# API Testing — Practice Module

SauceDemo is a web demo, **not** an advertised public API testing sandbox. Do not claim these samples target a SauceDemo backend API.

## Suggested approach

Practice with a dedicated public demo API such as [JSONPlaceholder](https://jsonplaceholder.typicode.com/), where fake resources are intended for practice.

### API-001 — GET an existing resource

Request: `GET https://jsonplaceholder.typicode.com/posts/1`

Assertions:
- HTTP status is 200
- JSON content type is returned
- Body has a numeric `id` equal to 1
- Body has nonempty `title` and `body` fields

### API-002 — GET a nonexistent resource

Request: `GET https://jsonplaceholder.typicode.com/posts/999999`

Assertions:
- Response indicates no matching resource (typically HTTP 404)
- Note actual response shape and timing

### API-003 — Create a simulated resource

Request: `POST https://jsonplaceholder.typicode.com/posts`  
Body: `{"userId":1,"title":"QA test","body":"Sample post"}`

Assertions:
- HTTP status indicates creation (typically 201)
- Returned fields correspond to supplied test input

> JSONPlaceholder simulates writes; it does not persist newly created records. Verify actual behavior when running these tests.

## Tracking

| Case | Execution |
| --- | --- |
| API-001 | Not Run |
| API-002 | Not Run |
| API-003 | Not Run |

You can implement these in Postman or the CLI. Save a collection export and sanitized responses as evidence only after running them.
