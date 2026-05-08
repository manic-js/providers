# `@manicjs/providers`

Official deployment providers for Manic.

## Documentation

- Website: [manicjs.tech](https://www.manicjs.tech/)
- Deployments: [manicjs.tech/docs/framework/deployment](https://www.manicjs.tech/docs/framework/deployment)
- Vercel: [manicjs.tech/docs/framework/deployment/vercel](https://www.manicjs.tech/docs/framework/deployment/vercel)
- Cloudflare: [manicjs.tech/docs/framework/deployment/cloudflare](https://www.manicjs.tech/docs/framework/deployment/cloudflare)

## Install

```bash
bun add @manicjs/providers
```

## Usage

```ts
import { defineConfig } from 'manicjs/config';
import { vercel } from '@manicjs/providers';

export default defineConfig({
  providers: [vercel()],
});
```

## License

GPL-3.0
