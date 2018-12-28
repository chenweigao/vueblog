# Charts.js

`Charts.js`, npm Frappe Charts and Echarts

In flask web framework, sometimes we need to do the **data visualization**, there are some popular JavaScript to do this.


[Official doc latest](http://www.chartjs.org/docs/latest/);

## 	Installation

use the `chart.js` CDN: [https://cdnjs.com/libraries/Chart.js](https://cdnjs.com/libraries/Chart.js)

in Flask, import the `.js` using:

```yaml
{% raw %}
{% block scripts %}
<script src="/static/js/Chart.min.js"></script>
<script src="cdn_url"></script>
{% endblock %}
{% endraw %}
```

## npm install

`Node.js` package manager, we using the `npm` to install `charts.js`:

- [search bar](https://www.npmjs.com/)
- [npm tutorial](https://docs.npmjs.com/getting-started/what-is-npm)

npm is written in Node.js, so we need to install Node.js. there we using the Node.js installation method,  use one of the installers from the [Node.js download page](https://nodejs.org/en/download/) using LTS version.

to test, run `node -v` and `npm -v`.

update to the latest version, 

```bash
npm install npm@latest -g
```

then download charts.js files form [GitHub](https://github.com/chartjs/Chart.js/releases).

## Responsive Charts

Chart.js provides a [few options](http://www.chartjs.org/docs/latest/general/responsive.html#configuration-options) to enable responsiveness and control the resize behavior of charts by detecting when the canvas *display* size changes and update the *render* size accordingly.

````javascript
options:{
    responsive: true
}
````

## Sample

in `views.py`:

```python

@main.route('/charts')
def charts():
    legend = 'Monthly Data'
    labels = ["January", "February", "March", "April", "May", "June", "July", "August"]
    values = [10, 9, 8, 7, 6, 4, 7, 8]
    return render_template('charts.html', values=values, labels=labels, legend=legend)
```

in `charts.html`:

```html
{% raw %}
{% block scripts %} {{ super() }}
<script src="/static/js/Chart.min.js"></script>
<script>
  // Global parameters:
  // do not resize the chart canvas when its container does (keep at 600x400px)
  Chart.defaults.global.responsive = false;

  // define the chart data
  var chartData = {
    labels: [{% for item in labels %}
  "{{item}}",
    {% endfor %}],
  datasets: [{
    label: '{{ legend }}',
    fill: true,
    lineTension: 0.1,
    backgroundColor: "rgba(75,192,192,0.4)",
    borderColor: "rgba(75,192,192,1)",
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: "rgba(75,192,192,1)",
    pointBackgroundColor: "#fff",
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: "rgba(75,192,192,1)",
    pointHoverBorderColor: "rgba(220,220,220,1)",
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [{% for item in values %}
                    {{ item }},
  			{% endfor %}],
    spanGaps: false
      }]
    }

  // get chart canvas
  var ctx = document.getElementById("myChart").getContext("2d");

  // create the chart using the chart canvas
  var myChart = new Chart(ctx, {
    type: 'line',
    data: chartData,
  });
</script>
{% endblock %}
{% endraw %}
```

in `charts.html`:

```yaml
{% raw %}
{% block page_content %}
<canvas id="myChart" width="500" height="400"></canvas>
{% endblock %} 
{% endraw %}
```

There is an example: [https://gitlab.com/patkennedy79/flask_chartjs_example/tree/master](https://gitlab.com/patkennedy79/flask_chartjs_example/tree/master)

# Frappe Charts

GitHub-inspired simple and modern SVG charts for the web with zero dependencies, [see it](https://frappe.io/charts) to build a month-wise heatmap like GitHub.

# Other sample

- add `button`

  ```html
  <button type="button" onclick="document.getElementById('id1').style.color='red'">
  Click here
  </button>
  ```

- hidden text

  ```html
  <p id="p1">This is a text</p>
  
  <input type="button" value="hidden text" onclick="document.getElementById('p1').style.visibility='hidden'" />
  <input type="button" value="show text" onclick="document.getElementById('p1').style.visibility='visible'" />
  ```
