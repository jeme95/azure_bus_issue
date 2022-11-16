import { TestBed } from '@angular/core/testing';
import { ServiceBusClient } from '@azure/service-bus';

import { AzureBusService, connectionString, flyableQueue } from './azure-bus.service';

fdescribe('AzureBusService', () => {
  let service: AzureBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AzureBusService);
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('check azure bus connectivity', async () => {
    const sbClient = new ServiceBusClient(connectionString);

    const sender = sbClient.createSender(flyableQueue);
    console.log('sender created')

    const msg = { body: 'lorem ipsum' }

    console.log(`sending the message ...`)

    await sender.sendMessages(msg)

    console.log(`the message has been sent`)

    expect(true).toBe(true);
  });

});
