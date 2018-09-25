import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
        <div class="row">
            <div class="col-md-6">
                <table class="table table-striped">
                    <tr>
                        <th>Pipe Expression</th>
                        <th>Formatted Output</th>
                    </tr>
                    <tr>
                        <td>amount | currency: 'USD': "symbol": '2.1-2'</td>
                        <td>{{amount | currency: 'USD': "symbol": '2.1-2'}}</td>
                    </tr>
                    <tr>
                        <td>releaseDate | date : 'MM/dd/yyyy'</td>
                        <td>{{releaseDate | date : 'MM/dd/yyyy'}}</td>
                    </tr>
                    <tr>
                        <td>amount | number: '3.3-4'</td>
                        <td>{{amount | number: '3.3-4'}}</td>
                    </tr>
                    <tr>
                        <td>percentOfGross | percent: '2.2'</td>
                        <td>{{percentOfGross | percent: '2.2'}}</td>
                    </tr>
                </table>
            </div>
        </div>


    `,
})
export class AppComponent {
  amount: number = 47.341;
  releaseDate: Date = new Date(1975, 4, 25);
  percentOfGross: number = 0.3245;
}
