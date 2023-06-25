import {Platform} from 'react-native';
import notifee, {TriggerType, EventType} from '@notifee/react-native';

class NotificationService {
  constructor() {
    this.configure();
  }

  configure = () => {
    notifee.onForegroundEvent(({type, detail}) => {
      switch (type) {
        case EventType.DISMISSED:
          console.log('User dismissed notification', detail.notification);
          this.onNotificationDismissed(detail.notification);
          break;
        case EventType.PRESS:
          this.onNotificationOpened(detail.notification);
          break;
      }
    });
  };

  onNotificationDismissed = notification => {
    // Handle received notification
    console.log('Notification received:', notification);
  };

  onNotificationOpened = notification => {
    // Handle notification opened
    console.log('Notification opened: Data', notification.data);
  };

  scheduleNotification = async ({title, body, timestamp, data}) => {
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    const trigger = {
      type: TriggerType.TIMESTAMP,
      timestamp, // fire at 11:10am (10 minutes before meeting)
    };

    // Display a notification
    await notifee.createTriggerNotification(
      {
        title,
        body,
        data,
        android: {
          channelId,
          timestamp,
          showTimestamp: true,
          pressAction: {
            id: 'default',
          },
        },
      },
      trigger,
    );
  };
}

export default new NotificationService();
