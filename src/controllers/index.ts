import * as epicControl from './epic.controllers';
import * as eventControl from './event.controllers';
import * as meControl from './me.controllers';
import * as periodControl from './period.controllers';

export const controllers = {
	epic: epicControl,
	event: eventControl,
	me: meControl,
	period: periodControl
};
