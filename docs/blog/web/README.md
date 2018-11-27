# Quick Note

1. What are defer and async attributes on a `<script>` tag?
    both attributes must only be used if the script has a `src` attribute, not an inline script

    ```js
    <script src="myscript.js"></script>
    <script src="myscript.js" defer></script>
    <script src="myscript.js" async></script>
    ```

2. What is stateful component and stateless component? 