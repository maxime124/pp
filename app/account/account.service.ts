import { Injectable }   from '@angular/core';
import { Account }      from '../class/account';

@Injectable()
export class AccountService {
    getAccounts(): Promise<Account[]> {
        return Promise.resolve(
                [{
                    code: '1',
                    name: 'cc',
                    value: '200',
                    percentage: '40'
                },
                {
                    code: '2',
                    name: 'pe',
                    value: '300',
                    percentage: '60'
                }]
        );
    }
}