
{{#each contents}}
	<li>
		<div class="forma_imaGes">
			<img src="{{getContent contentFragmentList 112}}"/>
			<p class="forma_imaGes_text">{{getContent contentFragmentList 9}}</p>
		</div> 
		<div class="forma_duce">
			<div class="forma_duce_float">
				<h3>{{getContent contentFragmentList 4}}</h3>
				<div>
					<a href="javascript:;">
					</a>
					<a href="javascript:;">
						<img src="assets/iocn/Fill 1.png" />
						<span>119</span>
					</a>
				</div>
			</div>
			<p class="list_P_id" data_list_p="{{ichCategoryId}}"></p>
		</div>
	</li>
{{/each}}


{{#each content_inherit}}
	<li>
		<div class="forma_imaGes">
			<img src="{{getContent contentFragmentList 113}}" class="conImg"/>
			<p class="forma_imaGes_text">{{getContent contentFragmentList 13}}</p>
		</div> 
		<div class="forma_duce">
			<div class="forma_duce_float">
				<h3>{{getContent contentFragmentList 4}}</h3>
				<div>
					<a href="javascript:;">
						<img src="assets/iocn/share.png" />
						<span>238</span>
					</a>
					<a href="javascript:;">
						<img src="assets/iocn/Fill 1.png" />
						<span>119</span>
					</a>
				</div>
			</div>
			<p class="list_P_id" data_list_p="{{ichCategoryId}}"></p>
		</div>
	</li>
{{/each}}



