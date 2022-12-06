# GBurghoorn.com

This is the repository that contains the source code for the
[gburghoorn.com](https://gburghoorn.com) website. This website is built using
[Zola](https://getzola.org) and [TailwindCSS](https://tailwindcss.com). On every
push to the main branch the automatically gets rebuild and pushed to hosting
server.

## Building instructions

It is needed for the Zola binary and TailwindCSS standalone CLI to be installed.

```bash
tailwindcss -i styles/styles.scss -o static/styles/styles.css --minify
zola build
```

## License

This project is licensed under a MIT License.