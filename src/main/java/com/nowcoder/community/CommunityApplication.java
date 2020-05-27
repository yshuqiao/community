package com.nowcoder.community;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;

@SpringBootApplication
//@MapperScan({"com.nowcoder.community.dao"})
public class CommunityApplication {

	@PostConstruct
	public void init(){
		//解决netty启动冲突的问题
		//see Netty4Utils.setAvailableProcessors(),解决调用NettyRuntime这个类的时候由于之前redis调用了而产生的冲突
		System.setProperty("es.set.netty.runtime.available.processors", "false");
	}

	public static void main(String[] args) {
		SpringApplication.run(CommunityApplication.class, args);
	}

}
