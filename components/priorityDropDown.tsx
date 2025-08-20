import { useState } from 'react';
import { Keyboard, StyleSheet, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

/// This function returns a dropdownpicker for task priority using the react-native-dropdown-picker dependency.
export function PriorityDropDown({ onSelect, value, setValue }: { onSelect: Function; value: string | null; setValue: any }) {
  /// useStates
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
  ]);

  // custom open/close function of the dropdown to include dismissing the keyboard when the dropdown is opened
  function togglePicker() {
    setOpen(!open);
    Keyboard.dismiss();
  }
  return (
    <View style={styles.dropDownContainer}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={togglePicker}
        setValue={setValue}
        setItems={setItems}
        placeholder='Priority'
        listMode='SCROLLVIEW'
        dropDownDirection='BOTTOM'
        // calls setTask state function in taskForm component to update state
        onChangeValue={(value) => {
          onSelect(value);
        }}
        style={styles.dropdownContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dropDownContainer: {
    width: 100,
    zIndex: 1000,
  },
  dropdownContent: {
    borderColor: '#fdc19f44',
    borderRadius: 20,
    backgroundColor: '#fdc19f44',
    zIndex: 1000,
  },
});
