customers = 10.times.map do
  Customer.create!(
    name: Faker::Name.name,
    address: Faker::Address.full_address,
    email: Faker::Internet.email,
    phone_number: Faker::PhoneNumber.phone_number
  )
end

20.times.map do
  Asset.create!({
    name: Faker::Commerce.product_name,
    address: Faker::Address.full_address,
    asset_model: Faker::Vehicle.model,
    notes: Faker::Lorem.paragraph,
    serial: Faker::Vehicle.vin,
    customer: [*customers, nil, nil, nil].sample
  }.merge([{}, {
    longitude: Faker::Address.longitude,
    latitude: Faker::Address.latitude
  }].sample))
end

workers = 5.times.map do
  Worker.create!(
    name: Faker::Name.name,
    address: Faker::Address.full_address,
    email: Faker::Internet.email,
    phone_number: Faker::PhoneNumber.phone_number
  )
end

templates = 5.times.map do
  Template.create!(
    customer: [*customers, nil].sample,
    worker: [workers.sample, nil].sample,
    name: Faker::Company.buzzword,
    planned_start_time: Faker::Time.forward(days: 5)
  )
end

50.times.map do
  Job.create!(
    customer: [*customers, nil].sample,
    worker: [workers.sample, nil].sample,
    template_name: [*templates, nil].sample.try(&:name) || '',
    state: 'DRAFT',
    planned_start_time: Faker::Time.forward(days: 5),
    steps: 3.times.map do |step_index|
      Step.new(
        name: "Step #{step_index + 1}",
        address: Faker::Address.full_address
      )
    end,
    custom_fields: 3.times.map do |custom_field_index|
      CustomField.new(
        name: "Custom Field #{custom_field_index + 1}",
        field_type: %w[Text Number Checkbox].sample,
        value: Faker::Address.full_address
      )
    end
  )
end
