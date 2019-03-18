export class DemoData {

    static getEndpoints(): any[] {

        return [{
            name: '/service/caller/exposedProcessesBPM',
            http: 'GET',
            value: '0',
            description: 'Viene istanziata una connessione con BPM restituendo una lista di tutti i processi esposti da BPM'
            }, {
            name: '/service/caller/testSOAPixpb0iib00',
            http: 'POST',
            value: '1',
            description: 'Chiamata SOAP al servizio ixpb0iib00'
            }, {
            name: '/service/profile/getUserInfo',
            http: 'GET',
            value: '2',
            description: 'Recupero dell\'oggetto utente dalla sessione'
            }, {
            name: '/service/profile/getAuthorization',
            http: 'GET',
            value: '3',
            description: 'Verifica della profilazione'
            }, {
            name: '/service/caller/restEcho',
            http: 'GET',
            value: '5',
            description: 'Chiamata REST al servizio non securizzato PROVAWAS06'
            }, {
            name: '/service/caller/restEchoProtected',
            http: 'GET',
            value: '6',
            description: 'Chiamata REST al servizio securizzato PROVAWAS04'
            }, {
            name: '/service/caller/restSum',
            http: 'GET',
            value: '7',
            description: 'Chiamata REST al servizio non securizzato PROVAWLS04'
            }, {
            name: '/service/caller/restSumProtected',
            http: 'GET',
            value: '8',
            description: 'Chiamata REST al servizio securizzato PROVAWLS02'
            }
        ];
    }

    static getHeader(endpointName: string): any {

        switch(endpointName) {

            case '/service/caller/exposedProcessesBPM':
                return {
					userIDFE: 'U0I1238',
					notISPUserID: 'NotISPUserID',
					language: 'E',
					serviceID: 'LIBBPMTEST',
					serviceVersion: '00',
					transactionID: 'TransactionId',
					ISPBranchCode: '02841',
					ISPCallerCompanyIDCode: '01',
					notISPCompanyIDCode: 'NotISPCompanyIDCode',
					ISPServiceCompanyIDCode: '01',
					applicationID: 'NBPP0',
					callerServerName: 'CallerServerName',
					channelIDCode: '01',
					callerProgramName: 'CallerProgramName',
					businessFileID: 'BusinessFileID',
					businessOperation: 'BusinessOperation',
					businessProcessID: 'BusinessProcessID',
					businessProcessName: 'BusinessProcessName',
					customerID: 'CustomerID'			
			    };

            case '/service/caller/testSOAPixpb0iib00':
                return {
					userIDFE: 'U0G8836',
					notISPUserID: 'NotISPUserID',
					language: 'E',
					serviceID: 'IXPB0IIB00',
					serviceVersion: '00',
					transactionID: '0665C20161125EGLIST12312',
					ISPBranchCode: '02841',
					ISPCallerCompanyIDCode: '01',
					notISPCompanyIDCode: 'NotISPCompanyIDCode',
					ISPServiceCompanyIDCode: '01',
					applicationID: 'MBRK0',
					callerServerName: 'a.b.c.d',
					channelIDCode: '02',
					callerProgramName: 'CallerProgramName',
					businessFileID: 'BusinessFileID',
					businessOperation: 'BusinessOperation',
					businessProcessID: 'BusinessProcessID',
					businessProcessName: 'BusinessProcessName',
					customerID: 'CustomerID'
			    };

            case '/service/caller/closeddays':
                return {
					userIDFE: 'U0I1238',
					notISPUserID: 'NotISPUserID',
					language: 'E',
					serviceID: 'LIBBPMTEST',
					serviceVersion: '00',
					transactionID: 'TransactionId',
					ISPBranchCode: '02841',
					ISPCallerCompanyIDCode: '01',
					notISPCompanyIDCode: 'NotISPCompanyIDCode',
					ISPServiceCompanyIDCode: '01',
					applicationID: 'NBPP0',
					callerServerName: 'CallerServerName',
					channelIDCode: '01',
					callerProgramName: 'CallerProgramName',
					businessFileID: 'BusinessFileID',
					businessOperation: 'BusinessOperation',
					businessProcessID: 'BusinessProcessID',
					businessProcessName: 'BusinessProcessName',
					customerID: 'CustomerID'			
			    };

            case '/service/caller/restEcho':
                return {
					userIDFE: 'U0I2925',
					notISPUserID: 'NotISPUserID',
					language: 'E',
					serviceID: 'PROVAWAS06',
					serviceVersion: '00',
					transactionID: '123456789ABCD',
					ISPBranchCode: '02841',
					ISPCallerCompanyIDCode: '01',
					notISPCompanyIDCode: 'NotISPCompanyIDCode',
					ISPServiceCompanyIDCode: '',
					applicationID: 'NBPP0',
					callerServerName: '10.248.190.246',
					channelIDCode: '31',
					callerProgramName: 'CallerProgramName',
					businessFileID: 'BusinessFileID',
					businessOperation: 'BusinessOperation',
					businessProcessID: 'BusinessProcessID',
					businessProcessName: 'BusinessProcessName',
					customerID: 'CustomerID'			
			    };

            case '/service/caller/restEchoProtected':
                return {
					userIDFE: 'U0I2925',
					notISPUserID: 'NotISPUserID',
					language: 'E',
					serviceID: 'PROVAWAS04',
					serviceVersion: '00',
					transactionID: '123456789ABCD',
					ISPBranchCode: '02841',
					ISPCallerCompanyIDCode: '01',
					notISPCompanyIDCode: 'NotISPCompanyIDCode',
					ISPServiceCompanyIDCode: '',
					applicationID: 'NBPP0',
					callerServerName: '10.248.190.246',
					channelIDCode: '31',
					callerProgramName: 'CallerProgramName',
					businessFileID: 'BusinessFileID',
					businessOperation: 'BusinessOperation',
					businessProcessID: 'BusinessProcessID',
					businessProcessName: 'BusinessProcessName',
					customerID: 'CustomerID'			
			    };

            case '/service/caller/restSum':
                return {
					userIDFE: 'U0I2925',
					notISPUserID: 'NotISPUserID',
					language: 'E',
					serviceID: 'PROVAWLS04',
					serviceVersion: '00',
					transactionID: '123456789ABCD',
					ISPBranchCode: '02841',
					ISPCallerCompanyIDCode: '01',
					notISPCompanyIDCode: 'NotISPCompanyIDCode',
					ISPServiceCompanyIDCode: '',
					applicationID: 'NBPP0',
					callerServerName: '10.248.190.246',
					channelIDCode: '31',
					callerProgramName: 'CallerProgramName',
					businessFileID: 'BusinessFileID',
					businessOperation: 'BusinessOperation',
					businessProcessID: 'BusinessProcessID',
					businessProcessName: 'BusinessProcessName',
					customerID: 'CustomerID'			
			    };

            case '/service/caller/restSumProtected':
                return {
					userIDFE: 'U0I2925',
					notISPUserID: 'NotISPUserID',
					language: 'E',
					serviceID: 'PROVAWLS02',
					serviceVersion: '00',
					transactionID: '123456789ABCD',
					ISPBranchCode: '02841',
					ISPCallerCompanyIDCode: '01',
					notISPCompanyIDCode: 'NotISPCompanyIDCode',
					ISPServiceCompanyIDCode: '',
					applicationID: 'NBPP0',
					callerServerName: '10.248.190.246',
					channelIDCode: '31',
					callerProgramName: 'CallerProgramName',
					businessFileID: 'BusinessFileID',
					businessOperation: 'BusinessOperation',
					businessProcessID: 'BusinessProcessID',
					businessProcessName: 'BusinessProcessName',
					customerID: 'CustomerID'			
			    };

            default:
                return {};
        }
    }
}