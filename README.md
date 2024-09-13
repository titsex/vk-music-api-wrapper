# vk-music-api-wrapper ![NPM Version](https://img.shields.io/npm/v/vk-music-api-wrapper?style=plastic&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fvk-music-api-wrapper) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/vk-music-api-wrapper?style=plastic) ![NPM License](https://img.shields.io/npm/l/vk-music-api-wrapper?style=plastic&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fvk-music-api-wrapper)

> Lightweight wrapper on the vk music api

**WARNING: The library was created for educational purposes. Do not use it for commercial purposes, this will violate the license agreement. For educational purposes, the created library was intended to be used only in other educational projects**

[Report a bug](https://github.com/titsex/vk-music-api-wrapper/issues/new)
<br>
[Contact the author](https://t.me/titsex)


```ts
import { VKMusicAPI } from 'vk-music-api-wrapper'

const api = new VKMusicAPI({
    token: '*****'
})
```

* ```token``` is required, to get it, follow the [link](https://oauth.vk.com/authorize?client_id=2685278&scope=65536&response_type=token&revoke=1), click "allow" and copy everything between access_token= and &expires_in