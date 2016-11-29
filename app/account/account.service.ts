import { Injectable }   from '@angular/core';
import { Account }      from '../class/account';

@Injectable()
export class AccountService {
    getAccounts(): Promise<Account[]> {
        return Promise.resolve(
                [new Account('1','cc','200','40')
                ,
                {
                    code: '2',
                    name: 'pe',
                    value: '300',
                    percentage: '60'
                }]
        );
    }
}