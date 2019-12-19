1000.times.map do |i|
  puts "Creating Customer #{i}"
  Customer.create!(
    name: Faker::Name.name,
    address: Faker::Address.full_address,
    email: Faker::Internet.email,
    phone_number: Faker::PhoneNumber.phone_number
  )
end

1000.times.map do |i|
  puts "Creating Asset #{i}"
  Asset.create!({
    name: Faker::Commerce.product_name,
    address: Faker::Address.full_address,
    asset_model: Faker::Vehicle.model,
    notes: Faker::Lorem.paragraph,
    serial: Faker::Vehicle.vin,
    customer: [*Customer.all, nil, nil, nil].sample
  }.merge([{}, {
    longitude: Faker::Address.longitude,
    latitude: Faker::Address.latitude
  }].sample))
end

20.times.map do |i|
  puts "Creating Worker #{i}"
  Worker.create!(
    name: Faker::Name.name,
    address: Faker::Address.full_address,
    email: Faker::Internet.email,
    phone_number: Faker::PhoneNumber.phone_number
  )
end

50.times.map do |i|
  puts "Creating Template #{i}"
  Template.create!(
    customer: [*Customer.all, nil].sample,
    worker: [Worker.all.sample, nil].sample,
    name: Faker::Company.buzzword,
    planned_start_time: Faker::Time.forward(days: 5)
  )
end

10.times.map do |i|
  puts "Creating Job #{i}"
  Job.create_fake!
end
