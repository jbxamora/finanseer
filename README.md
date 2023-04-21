## Finanseer

A Finance App Dashboard designed to provide valuable insights and financial data visualization. The dashboard includes various types of charts, a data grid for displaying product and order information, and machine learning predictions for revenue forecasting.

## Take A Look!

`WILL TAKE A MINUTE FOR API DATA TO LOAD`
https://finanseer-4bdg.onrender.com

## Tech Stack
This project uses the following libraries and tools:

1. [React](https://reactjs.org/) - A JavaScript library for building user interfaces

2. [Material UI](https://mui.com/) - A popular React UI framework

3. [TailWindCSS Shades](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development

4. [Regression.js](https://github.com/Tom-Alexander/regression-js) - A library for making machine learning predictions using regression

5. [Recharts](https://recharts.org/) - A composable charting library built on React components

6. [MUI DataGrid](https://mui.com/components/data-grid/) - A powerful data grid for displaying tables in Material-UI

7. [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview) - A data-fetching and caching library for Redux apps
8. [Redux](https://redux.js.org/) - A predictable state container for JavaScript apps

9. [TypeScript](https://www.typescriptlang.org/) - A statically typed superset of JavaScript

10. [Render](https://render.com/) - A unified platform to build and run all your apps and websites


## Code Snippets

### Prediction
This code snippet is a React functional component called Predictions. It fetches KPI data and processes it to create a regression line. The regression line is used to predict future revenue based on past revenue data. The component prepares this data in a suitable format for visualization in a chart.

```js

const Predictions = () => {
  const { palette } = useTheme();
  const [isPredictions, setIsPredictions] = useState(false);
  const { data: kpiData } = useGetKpisQuery();

  const formattedData = useMemo(() => {
    if (!kpiData) return [];
    const monthData = kpiData[0].monthlyData;

    const formatted: Array<DataPoint> = monthData.map(
      ({ revenue }, i: number) => {
        return [i, revenue];
      }
    );
    const regressionLine = regression.linear(formatted);

    return monthData.map(({ month, revenue }, i: number) => {
      return {
        name: month,
        "Actual Revenue": revenue,
        "Regression Line": regressionLine.points[i][1],
        "Predicted Revenue": regressionLine.predict(i + 12)[1],
      };
    });
  }, [kpiData]);
  /// rest of component
},
```
## License

MIT License

Copyright (c) [2022] [Jorge Zamora]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


Please refer to the documentation of each library/tool for more information on their usage and licensing.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. If the issue goes unresolved for more than a week feel free to contact me at any of the links listed below. Be sure to add me on LinkedIn and Follow me on GitHub to view my course progression.

