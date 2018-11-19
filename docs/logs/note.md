# Note

## URLs

[Footawesome](http://www.fontawesome.com.cn/icons/video-camera/)

```html
<i class="fa fa-video-camera" aria-hidden="true"></i>
```

## vuepress

[zero-to-deploy](https://scotch.io/tutorials/zero-to-deploy-build-a-documentation-system-with-vue-and-vuepress)

```cpp
while (1) {
    char c = '\0';
    if (read(STDIN_FILENO, &c, 1) == -1 && errno != EAGAIN) die("read");
    if (iscntrl(c)) {
        // Control characters are nonprintable characters
        // 0-31 and 127 is control characters
        printf("%d\r\n", c);
    }
    else
    {
        printf("%d ('%c')\r\n", c, c);
    }
    if (c == CTRL_KEY('q')) break;
}
```

`getline()` is useful for reading lines from a file when we don’t know how much memory to allocate for each line.

- difference between `size_t` and `ssize_t`
- To store mulitiple lines, make an array that will be a dynamicallu-allocated array