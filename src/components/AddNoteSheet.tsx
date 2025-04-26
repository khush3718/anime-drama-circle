
import React from 'react';
import { useForm } from 'react-hook-form';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface AddNoteFormValues {
  note: string;
}

interface AddNoteSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AddNoteSheet: React.FC<AddNoteSheetProps> = ({ open, onOpenChange }) => {
  const form = useForm<AddNoteFormValues>();

  const onSubmit = (data: AddNoteFormValues) => {
    console.log('Note submitted:', data);
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Add Note</SheetTitle>
        </SheetHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <FormField
              control={form.control}
              name="note"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Note</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Share your thoughts or ask a question"
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">Add Note</Button>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};

export default AddNoteSheet;
