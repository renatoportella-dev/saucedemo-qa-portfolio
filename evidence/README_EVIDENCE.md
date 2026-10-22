# SauceDemo — manual QA evidence archive

**Test session:** October 21, 2026  
**Tester:** Renato Portella  
**Application:** https://www.saucedemo.com/  
**Files:** 28 original PNG screenshots recovered from the original QA session.  
**Reminder:** The ten documented scenarios are not equivalent to 28 distinct executed tests. Screenshots of exploratory behavior can illustrate deliberate differences among SauceDemo demo accounts, not necessarily production defects.

## Key screenshot index

| Screenshot | Scenario | Visible evidence / assessment |
|---|---|---|
| [image(20261021-183744).png](capturas/image%2820261021-183744%29.png) | Empty username | “Username is required” message — expected validation |
| [image(20261021-183826).png](capturas/image%2820261021-183826%29.png) | Empty password | “Password is required” message — expected validation |
| [image(20261021-184945).png](capturas/image%2820261021-184945%29.png) | Locked account | Locked-out message — expected for locked_out_user |
| [image(20261021-181050).png](capturas/image%2820261021-181050%29.png) | Normal catalog | Product cards displayed |
| [image(20261021-184445).png](capturas/image%2820261021-184445%29.png) | Price sorting | Low-to-high list visible in the captured session |
| [image(20261021-185017).png](capturas/image%2820261021-185017%29.png) | problem_user | Same dog picture shown across multiple product cards — demo-account anomaly |
| [image(20261021-184745).png](capturas/image%2820261021-184745%29.png) | Checkout required field | First-name validation message — expected |
| [image(20261021-181434).png](capturas/image%2820261021-181434%29.png) | Checkout overview | Fleece Jacket $49.99, tax $4.00, total $53.99 |
| [image(20261021-181605).png](capturas/image%2820261021-181605%29.png) | Checkout completion | “Thank you for your order!” confirmation |
| [image(20261021-190118).png](capturas/image%2820261021-190118%29.png) | Cart display | Item details and removal controls visible; product image absent in this captured cart view — context/retest needed |
| [image(20261021-185720).png](capturas/image%2820261021-185720%29.png) | Sorting error | Browser alert “Sorting is broken!” — observed in demo-account testing |
| [image(20261021-190009).png](capturas/image%2820261021-190009%29.png) | Inconsistent sorting | Price low-to-high selected, but displayed values out of order — demo-account anomaly |
| [image(20261021-184623).png](capturas/image%2820261021-184623%29.png) | Cart | Bike Light item, badge 1, and checkout button visible |
| [image(20261021-185631).png](capturas/image%2820261021-185631%29.png) | Product detail | Backpack product detail view |
| [image(20261021-190213).png](capturas/image%2820261021-190213%29.png) | Checkout form | Sample non-sensitive test data entered |

## Additional screenshots

The other files show baseline login, intermediate catalog, navigation, product detail, checkout and exploratory states from the same session. Filenames have been preserved to keep references stable.

## Published evidence

All 28 PNG screenshots are now [published in `evidence/capturas/`](capturas/). Their original filenames have been preserved.