import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import SimpleDialog from './SimpleDialog';
import SimpleDialogSource from '!raw-loader!./SimpleDialog';

import AlertDialog from './AlertDialog';
import AlertDialogSource from '!raw-loader!./AlertDialog';

import AlertDialogSlide from './AlertDialogSlide';
import AlertDialogSlideSource from '!raw-loader!./AlertDialogSlide';

import FormDialog from './FormDialog';
import FormDialogSource from '!raw-loader!./FormDialog';

import CustomizedDialogs from './CustomizedDialogs';
import CustomizedDialogsSource from '!raw-loader!./CustomizedDialogs';

import FullScreenDialog from './FullScreenDialog';
import FullScreenDialogSource from '!raw-loader!./FullScreenDialog';

import MaxWidthDialog from './MaxWidthDialog';
import MaxWidthDialogSource from '!raw-loader!./MaxWidthDialog';

import ResponsiveDialog from './ResponsiveDialog';
import ResponsiveDialogSource from '!raw-loader!./ResponsiveDialog';

import ConfirmationDialog from './ConfirmationDialog';
import ConfirmationDialogSource from '!raw-loader!./ConfirmationDialog';

import DraggableDialog from './DraggableDialog';
import DraggableDialogSource from '!raw-loader!./DraggableDialog';

import ScrollDialog from './ScrollDialog';
import ScrollDialogSource from '!raw-loader!./ScrollDialog';

const Dialog = () => {
  return (
    <>
      <AppComponentHeader
        title='Dialog'
        description='Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.'
        refUrl='https://mui.com/components/dialogs/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Alert Dialog'
            component={AlertDialog}
            source={AlertDialogSource}
            noScrollbar
            description='Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Alert Dialog Slide'
            component={AlertDialogSlide}
            source={AlertDialogSlideSource}
            noScrollbar
            description='You can also swap out the transition, the next example uses Slide.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Form Dialog'
            component={FormDialog}
            source={FormDialogSource}
            noScrollbar
            description='Form dialogs allow users to fill out form fields within a dialog. For example, if your site prompts for potential subscribers to fill in their email address, they can fill out the email field and touch Submit.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Customized Dialogs'
            component={CustomizedDialogs}
            source={CustomizedDialogsSource}
            noScrollbar
            description='Here is an example of customizing the component. You can learn more about this in the overrides documentation page.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='FullScreen Dialogs'
            component={FullScreenDialog}
            source={FullScreenDialogSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Max Width Dialog'
            component={MaxWidthDialog}
            source={MaxWidthDialogSource}
            noScrollbar
            description='You can set a dialog maximum width by using the maxWidth enumerable in combination with the fullWidth boolean. When the fullWidth prop is true, the dialog will adapt based on the maxWidth value.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Responsive Dialog'
            component={ResponsiveDialog}
            source={ResponsiveDialogSource}
            noScrollbar
            description='You may make a dialog responsively full screen using useMediaQuery.'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='DraggableDialog'
            component={DraggableDialog}
            source={DraggableDialogSource}
            noScrollbar
            description='You can create a draggable dialog by using react-draggable. To do so, you can pass the imported Draggable component as the PaperComponent of the Dialog component. This will make the entire dialog draggable.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Scroll Dialog'
            component={ScrollDialog}
            source={ScrollDialogSource}
            noScrollbar
            description='When dialogs become too long for the users viewport or device, they scroll. '
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Simple Dialog'
            component={SimpleDialog}
            source={SimpleDialogSource}
            noScrollbar
            description='Simple dialogs can provide additional details or actions about a list item. For example, they can display avatars, icons, clarifying subtext, or orthogonal actions (such as adding an account).'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='ConfirmationDialog'
            component={ConfirmationDialog}
            source={ConfirmationDialogSource}
            noScrollbar
            description='Confirmation dialogs require users to explicitly confirm their choice before an option is committed. For example, users can listen to multiple ringtones but only make a final selection upon touching "OK".'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Dialog;
