 # Description:
 A simple example to authenticate an express endpoint with passport-jwt.

 # Api documentation:
  
 - http://www.passportjs.org/packages/passport-jwt/
 - https://github.com/mikenicholson/passport-jwt
 - https://www.npmjs.com/package/passport-jwt
  
 - use this to generate jwt tokens:
 - https://jwt.io/
  
  payload data should have atleast the following:
  
``` 
{
    "secret":"sharabsecret",
    "iss": "ali sharabiani",
    "aud": "sharabiani.codes",
    "sub": 123
}
```
