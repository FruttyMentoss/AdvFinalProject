
import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Button} from 'react-native';
import { useForm, Controller } from "react-hook-form";

export default function App() {

  const image = {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDnbArMJDCQ6TCvtRXPs-1AeFJjO69Nt4Z-w&usqp=CAU'};

  const { control, handleSubmit, formState: { errors, isDirty } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }

  });


  const onSubmit = data => {
    console.log(data)
  };
  

  return (
    <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}></ImageBackground>

        <Text style={styles.titleText}>VALO WIKI</Text>
        <View style={styles.container}>
        <Text style={styles.headerText}>Login Account</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>Email:</Text>
          <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder=" Enter your Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            keyboardType="email-address"
            
            
          />
        )}
        name="email"
      />
      {errors.email && <Text>This is required.</Text>}

          
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>Password:</Text>
          
          <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder=" Enter password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            keyboardType="password"
            
            
          />
        )}
        name="password"
      />
      {errors.password && <Text>This is required.</Text>}

        </View>
        <TouchableOpacity style={styles.button} onPress ={handleSubmit(onSubmit)} >
          <Text style={styles.buttonText}>LOGIN</Text>
         
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress ={handleSubmit(onSubmit)} >
        <Text style={styles.buttonText2}>CREATE NEW ACCOUNT</Text>

        </TouchableOpacity>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000023',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    flex: 1,
    justifyContent: 'center',
    width:500,
    height:250,
  },

  titleText: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 100,
    color: "white",
    textAlign: "center",
    position:"absolute",
    height: 250,
  },

  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 100,
    color: "white",
    position: "absolute",
    height: 500,
    right: 10,
    left: 10,
  },

  inputContainer: {
    marginBottom: 7,
    width: "100%",
    color: "black",
    right: 50,
 
  },
  labelText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 10,
    color: "white",
    right: 50,
    left: 50,
  },
  input: {
    backgroundColor: "#D3D3D3",
    padding: 15,
    borderRadius: 50,
    width: 300,
    borderWidth: 1,
    borderColor: "black",
    right: 50,
    left: 50,

  },
  button: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 20,
    width: 200,
    alignItems: "center",
    marginTop: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    
  },

  button2: {
    backgroundColor: "#000023",
    padding: 15,
    borderRadius: 20,
    width: 200,
    alignItems: "center",
    marginTop: 50,
    
  },
  buttonText2: {
    color: "red",
    fontSize: 15,
    fontWeight: "bold",
  },
  
});
