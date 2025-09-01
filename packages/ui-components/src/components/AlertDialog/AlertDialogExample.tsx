import Button from '../Button';
import { AlertDialog } from './AlertDialog';

//// EXAMPLE ////
export function AlertDialogDemo() {
  return (
    <AlertDialog
      trigger={
        <AlertDialog.Trigger>
          <Button>Open Alert Dialog</Button>
        </AlertDialog.Trigger>
      }
      title={<AlertDialog.Title>Alert Title</AlertDialog.Title>}
      description={
        <AlertDialog.Description>
          A dialog is a type of modal window that appears in front of app
          content to provide critical information, or prompt for a decision to
          be made.
        </AlertDialog.Description>
      }
      actions={
        <>
          <AlertDialog.Cancel>
            <Button type="chromeless">Cancel</Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button theme="accent">Accept</Button>
          </AlertDialog.Action>
        </>
      }
    ></AlertDialog>
  );
}
