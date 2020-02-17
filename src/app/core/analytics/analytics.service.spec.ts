import { TestBed } from '@angular/core/testing';

import { AnalyticsService } from './analytics.service';

describe('AnalyticsService', () => {
  const analyticsServiceSpy = jasmine.createSpyObj('AnalyticsService', ['logEvent', 'setUserProperty', 'trackScreen', 'setUserId']);

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: AnalyticsService, useValue: analyticsServiceSpy },
    ]
  }));

  it('should be created', () => {
    const service: AnalyticsService = TestBed.get(AnalyticsService);
    expect(service).toBeTruthy();
  });
});
