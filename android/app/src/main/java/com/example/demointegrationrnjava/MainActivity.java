package com.example.demointegrationrnjava;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getSupportActionBar().hide();
        setContentView(R.layout.activity_main);

        Button btnGoRNScreen = findViewById(R.id.btnGoRNScreen);
        EditText editText = findViewById(R.id.editText);
        btnGoRNScreen.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(MainActivity.this,MyReactActivity.class);
                intent.putExtra("message_from_native",editText.getText());
                startActivity(intent);
            }
        });
    }
}