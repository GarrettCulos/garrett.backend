import * as epic from './epic.model';
import * as tag from './tag.model';
import * as era from './era.model';
import * as event from './event.model';
import * as me from './me.model';
import * as period from './period.model';
import * as tagXepic from './tagXEpic.model';
import * as tagXevent from './tagXEvent.model';
import * as tagXperiod from './tagXPeriod.model';

export const model = {
	epic: epic.epicM,
	era: era.eraM,
	event: event.eventM,
	me: me.meM,
	period: period.periodM,
	tag: tag.tagM,
	tagXepic: tagXepic.tagXepicM,
	tagXevent: tagXevent.tagXeventM,
	tagXperiod: tagXperiod.tagXperiodM
};

export * from './epic.model';
export * from './era.model';
export * from './event.model';
export * from './me.model';
export * from './period.model';
export * from './tag.model';
