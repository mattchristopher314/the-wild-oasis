import { useSettings } from "./useSettings";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useUpdateSetting } from "./useUpdateSetting";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minimum_booking_length,
      maximum_booking_length,
      maximum_guests_per_booking,
      breakfast_price,
    } = {},
  } = useSettings();
  const { isUpdating, updateSetting } = useUpdateSetting();

  if (isLoading) return <Spinner />;

  function handleUpdate(e, field) {
    const { value } = e.target;

    if (!value) return;
    updateSetting({ [field]: value });
  }

  return (
    <Form>
      <FormRow label="Minimum nights per booking">
        <Input
          type="number"
          id="min-nights"
          disabled={isUpdating}
          defaultValue={minimum_booking_length}
          onBlur={(e) => handleUpdate(e, "minimum_booking_length")}
        />
      </FormRow>

      <FormRow label="Maximum nights per booking">
        <Input
          type="number"
          id="max-nights"
          disabled={isUpdating}
          defaultValue={maximum_booking_length}
          onBlur={(e) => handleUpdate(e, "maximum_booking_length")}
        />
      </FormRow>

      <FormRow label="Maximum guests per booking">
        <Input
          type="number"
          id="max-guests"
          disabled={isUpdating}
          defaultValue={maximum_guests_per_booking}
          onBlur={(e) => handleUpdate(e, "maximum_guests_per_booking")}
        />
      </FormRow>

      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          disabled={isUpdating}
          defaultValue={breakfast_price}
          onBlur={(e) => handleUpdate(e, "breakfast_price")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
